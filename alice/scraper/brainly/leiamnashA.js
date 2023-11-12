const req = require("request-promise");
const path = require("path");
const {
  _required,
  clean
} = require(path.join(__dirname, "leiamnashB.js"));

const format_graphql = `query SearchQuery($query: String!, $first: Int!, $after: ID) {\n	questionSearch(query: $query, first: $first, after: $after) {\n	edges {\n	  node {\ncontent\n		attachments{\nurl\n}\n		answers {\n			nodes {\ncontent\n				attachments{\nurl\n}\n}\n}\n}\n}\n}\n}\n`;

const Brainly = async (query, count) => {
  _required(count);
  _required(query);
  let service = {
    uri: 'https://brainly.ph/graphql/ph',
    json: true,
    headers: {
      'host': 'brainly.ph',
      "content-type": "application/json; charset=utf-8",
      "user-agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0"
    },
    body: {
      "operationName": "SearchQuery",
      "variables": {
        "query": query,
        "after": null,
        "first": count
      },
      "query": format_graphql
    }
  };
  return await req.post(service).then(response => {
    let question_list = response.data.questionSearch.edges;
    if (question_list.length) {
      let final_data = [];
      question_list.forEach(question => {
        let Answer = [];
        let answers = question.node.answers.nodes;
        if (answers.length) {
          answers.forEach(answer => {
            Answer.push({
              "text": clean(answer.content),
              "media": (answer.attachments.length) ? answer.attachments.map(file => file.url) : []
            });
          });
        }
        final_data.push({
          "Question": clean(question.node.content),
          "Answer": Answer,
          "questionMedia": (question.node.attachments.length) ? question.node.attachments.map(file => file.url) : [],
        });
      });
      return {
        'success': true,
        'length': final_data.length,
        'message': 'Request Success',
        'data': final_data
      };
    } else {
      return {
        'success': true,
        'length': 0,
        'message': 'Data not found',
        'data': []
      };
    }
  });
};

module.exports = Brainly;