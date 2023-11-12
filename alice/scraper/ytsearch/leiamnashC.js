"use strict";

const https = require("https");
const path = require("path");
const { SearchTypes, YouTubeURL } = require(path.join(__dirname, "..", "..", "scraper/ytsearch/leiamnashA.js"));
const Util = require(path.join(__dirname, "..", "..", "scraper/ytsearch/leiamnashB.js"));

class Scraper {
    constructor(language = 'en') {
        this._lang = language;
    }

    _extractData(json) {
        json = json
            .contents
            .twoColumnSearchResultsRenderer
            .primaryContents;

        let contents = [];

        if (json.sectionListRenderer) {
            contents = json.sectionListRenderer.contents.filter((item) =>
                item?.itemSectionRenderer?.contents.filter(x => x.videoRenderer || x.playlistRenderer || x.channelRenderer)
            ).shift().itemSectionRenderer.contents;
        }

        if (json.richGridRenderer) {
            contents = json.richGridRenderer.contents.filter((item) =>
                item.richItemRenderer && item.richItemRenderer.content
            ).map(item => item.richItemRenderer.content);
        }

        return contents;
    }

    _fetch(search_query, searchType = 'VIDEO', requestedLang = this._lang) {
        if (requestedLang && typeof requestedLang !== 'string') {
            throw new TypeError('The request language property was not a string while a valid IANA language subtag is expected.');
        }

        const sp = SearchTypes[searchType.toUpperCase()] || SearchTypes['VIDEO'];

        YouTubeURL.search = new URLSearchParams({
            search_query,
            sp
        });

        return new Promise((resolve, reject) => {
            https.get(YouTubeURL, {
                headers: {
                    'Accept-Language': requestedLang
                }
            }, res => {
                res.setEncoding('utf8');

                let data = '';

                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => resolve(data));
            }).on('error', reject);
        });
    }

    _getSearchData(webPage) {
        const startString = 'var ytInitialData = ';
        const start = webPage.indexOf(startString);
        const end = webPage.indexOf(';</script>', start);

        const data = webPage.substring(start + startString.length, end);

        try {
            return JSON.parse(data);
        } catch (e) {
            throw new Error('Failed to parse YouTube search data. YouTube might have updated their site or no results returned.');
        }
    }

    _parseData(data) {
        const results = {
            channels: [],
            playlists: [],
            streams: [],
            videos: []
        };

        for (const item of data) {
    
            if (Util.isVideo(item))
                results.videos.push(Util.getVideoData(item));
            else if (Util.isPlaylist(item))
                results.playlists.push(Util.getPlaylistData(item));
            else if (Util.isStream(item))
                results.streams.push(Util.getStreamData(item));
            else if (Util.isChannel(item))
                results.channels.push(Util.getChannelData(item));
        }

        return results;
    }

   
    async search(query, options = {}) {
        const webPage = await this._fetch(query, options.searchType, options.language);

        const parsedJson = this._getSearchData(webPage);

        const extracted = this._extractData(parsedJson);
        const parsed = this._parseData(extracted);

        return parsed;
    }

   
    setLang(language = 'en') {
        this._lang = language;
    }
}

module.exports = Scraper;