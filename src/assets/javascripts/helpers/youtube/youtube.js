"use strict";

import commonHelper from '../common.js'

window.browser = window.browser || window.chrome;

const targets = [
  /^https?:\/\/(www\.|music\.|m\.|)youtube\.com(\/.*|$)/,

  /^https?:\/\/img\.youtube\.com\/vi\/.*\/..*/, // https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
  /^https?:\/\/(i|s)\.ytimg\.com\/vi\/.*\/..*/,

  /^https?:\/\/(www\.|music\.|)youtube\.com\/watch\?v\=..*/,

  /^https?:\/\/youtu\.be\/..*/,

  /^https?:\/\/(www\.|)(youtube|youtube-nocookie)\.com\/embed\/..*/,
];
let redirects = {
  "invidious": {
    "normal": [],
    "tor": []
  },
  "piped": {
    "normal": [
      "https://piped.kavin.rocks",
      "https://piped.silkky.cloud",
      "https://piped.tokhmi.xyz",
      "https://piped.mint.lgbt",
      "https://il.ax"
    ],
    "tor": [
      "http://piped2bbch4xslbl2ckr6k62q56kon56ffowxaqzy42ai22a4sash3ad.onion"
    ]
  },
  "pipedMaterial": {
    "normal": [
      "https://piped-material.xn--17b.net",
      "https://piped-material.ftp.sh",
    ],
    "tor": []
  }
};

const getRedirects = () => redirects;

function getCustomRedirects() {
  return {
    "invidious": {
      "normal": [...invidiousNormalRedirectsChecks, ...invidiousNormalCustomRedirects],
      "tor": [...invidiousTorRedirectsChecks, ...invidiousTorCustomRedirects]
    },
    "piped": {
      "normal": [...pipedNormalRedirectsChecks, ...pipedNormalCustomRedirects],
      "tor": [...pipedTorRedirectsChecks, ...pipedTorCustomRedirects]
    }
  };
};

function setInvidiousRedirects(val) {
  redirects.invidious = val;
  browser.storage.local.set({ youtubeRedirects: redirects })
  console.log("invidiousRedirects: ", val)
}

let invidiousNormalRedirectsChecks;
const getInvidiousNormalRedirectsChecks = () => invidiousNormalRedirectsChecks;
function setInvidiousNormalRedirectsChecks(val) {
  invidiousNormalRedirectsChecks = val;
  browser.storage.local.set({ invidiousNormalRedirectsChecks })
  console.log("invidiousNormalRedirectsChecks: ", val)
}

let invidiousNormalCustomRedirects = [];
const getInvidiousNormalCustomRedirects = () => invidiousNormalCustomRedirects;
function setInvidiousNormalCustomRedirects(val) {
  invidiousNormalCustomRedirects = val;
  browser.storage.local.set({ invidiousNormalCustomRedirects })
  console.log("invidiousNormalCustomRedirects: ", val)
}

let invidiousTorRedirectsChecks;
const getInvidiousTorRedirectsChecks = () => invidiousTorRedirectsChecks;
function setInvidiousTorRedirectsChecks(val) {
  invidiousTorRedirectsChecks = val;
  browser.storage.local.set({ invidiousTorRedirectsChecks })
  console.log("invidiousTorRedirectsChecks: ", val)
}

let invidiousTorCustomRedirects = [];
const getInvidiousTorCustomRedirects = () => invidiousTorCustomRedirects;
function setInvidiousTorCustomRedirects(val) {
  invidiousTorCustomRedirects = val;
  browser.storage.local.set({ invidiousTorCustomRedirects })
  console.log("invidiousTorCustomRedirects: ", val)
}

let pipedNormalRedirectsChecks;
const getPipedNormalRedirectsChecks = () => pipedNormalRedirectsChecks;
function setPipedNormalRedirectsChecks(val) {
  pipedNormalRedirectsChecks = val;
  browser.storage.local.set({ pipedNormalRedirectsChecks })
  console.log("pipedNormalRedirectsChecks: ", val)
}

let pipedNormalCustomRedirects = [];
const getPipedNormalCustomRedirects = () => pipedNormalCustomRedirects;
function setPipedNormalCustomRedirects(val) {
  pipedNormalCustomRedirects = val;
  browser.storage.local.set({ pipedNormalCustomRedirects })
  console.log("pipedNormalCustomRedirects: ", val)
}

let pipedTorRedirectsChecks;
const getPipedTorRedirectsChecks = () => pipedTorRedirectsChecks;
function setPipedTorRedirectsChecks(val) {
  pipedTorRedirectsChecks = val;
  browser.storage.local.set({ pipedTorRedirectsChecks })
  console.log("pipedTorRedirectsChecks: ", val)
}

let pipedTorCustomRedirects = [];
const getPipedTorCustomRedirects = () => pipedTorCustomRedirects;
function setPipedTorCustomRedirects(val) {
  pipedTorCustomRedirects = val;
  browser.storage.local.set({ pipedTorCustomRedirects })
  console.log("pipedTorCustomRedirects: ", val)
}

function setPipedRedirects(val) {
  redirects.piped = val;
  browser.storage.local.set({ youtubeRedirects: redirects })
  console.log("pipedRedirects: ", val)
}

let pipedMaterialNormalRedirectsChecks;
const getPipedMaterialNormalRedirectsChecks = () => pipedMaterialNormalRedirectsChecks;
function setPipedMaterialNormalRedirectsChecks(val) {
  pipedMaterialNormalRedirectsChecks = val;
  browser.storage.local.set({ pipedMaterialNormalRedirectsChecks })
  console.log("pipedMaterialNormalRedirectsChecks: ", val)
}

let pipedMaterialNormalCustomRedirects = [];
const getPipedMaterialNormalCustomRedirects = () => pipedMaterialNormalCustomRedirects;
function setPipedMaterialNormalCustomRedirects(val) {
  pipedMaterialNormalCustomRedirects = val;
  browser.storage.local.set({ pipedMaterialNormalCustomRedirects })
  console.log("pipedMaterialNormalCustomRedirects: ", val)
}

let pipedMaterialTorRedirectsChecks;
const getPipedMaterialTorRedirectsChecks = () => pipedMaterialTorRedirectsChecks;
function setPipedMaterialTorRedirectsChecks(val) {
  pipedMaterialTorRedirectsChecks = val;
  browser.storage.local.set({ pipedMaterialTorRedirectsChecks })
  console.log("pipedMaterialTorRedirectsChecks: ", val)
}

let pipedMaterialTorCustomRedirects = [];
const getPipedMaterialTorCustomRedirects = () => pipedMaterialTorCustomRedirects;
function setPipedMaterialTorCustomRedirects(val) {
  pipedMaterialTorCustomRedirects = val;
  browser.storage.local.set({ pipedMaterialTorCustomRedirects })
  console.log("pipedMaterialTorCustomRedirects: ", val)
}

function setPipedMaterialRedirects(val) {
  redirects.pipedMaterial = val;
  browser.storage.local.set({ youtubeRedirects: redirects })
  console.log("pipedMaterialRedirects: ", val)
}

let disable;
const getDisable = () => disable;
function setDisable(val) {
  disable = val;
  browser.storage.local.set({ disableYoutube: disable })
  console.log("disableYoutube: ", disable)
}

let protocol;
const getProtocol = () => protocol;
function setProtocol(val) {
  protocol = val;
  browser.storage.local.set({ youtubeProtocol: val })
  console.log("youtubeProtocol: ", val)
}

let invidiousAlwaysProxy;
function setInvidiousAlwaysProxy(val) {
  invidiousAlwaysProxy = val;
  browser.storage.local.set({ invidiousAlwaysProxy })
  console.log("invidiousAlwaysProxy: ", invidiousAlwaysProxy);
}
const getInvidiousAlwaysProxy = () => invidiousAlwaysProxy;

let OnlyEmbeddedVideo;
function setOnlyEmbeddedVideo(val) {
  OnlyEmbeddedVideo = val;
  browser.storage.local.set({ OnlyEmbeddedVideo })
  console.log("OnlyEmbeddedVideo: ", OnlyEmbeddedVideo)
}
const getOnlyEmbeddedVideo = () => OnlyEmbeddedVideo;

let invidiousVideoQuality;
function setInvidiousVideoQuality(val) {
  invidiousVideoQuality = val;
  browser.storage.local.set({ invidiousVideoQuality })
  console.log("invidiousVideoQuality: ", invidiousVideoQuality)
}
const getInvidiousVideoQuality = () => invidiousVideoQuality;

let theme;
const getTheme = () => theme;
function setTheme(val) {
  theme = val;
  browser.storage.local.set({ theme: theme })
  console.log("theme: ", theme)
}

let volume;
const getVolume = () => volume;
function setVolume(val) {
  volume = val;
  browser.storage.local.set({ youtubeVolume: volume })
  console.log("youtubeVolume: ", volume)
}

let invidiousPlayerStyle;
const getInvidiousPlayerStyle = () => invidiousPlayerStyle;
function setInvidiousPlayerStyle(val) {
  invidiousPlayerStyle = val;
  browser.storage.local.set({ invidiousPlayerStyle })
  console.log("invidiousPlayerStyle: ", invidiousPlayerStyle)
}

let invidiousSubtitles;
let getInvidiousSubtitles = () => invidiousSubtitles;
function setInvidiousSubtitles(val) {
  invidiousSubtitles = val;
  browser.storage.local.set({ invidiousSubtitles })
  console.log("invidiousSubtitles: ", invidiousSubtitles)
}

let autoplay;
const getAutoplay = () => autoplay;
function setAutoplay(val) {
  autoplay = val;
  browser.storage.local.set({ youtubeAutoplay: autoplay })
  console.log("autoplay: ", autoplay)
}

let frontend;
const getFrontend = () => frontend;
function setFrontend(val) {
  frontend = val;
  browser.storage.local.set({ youtubeFrontend: val })
  console.log("youtubeFrontend: ", val)
}

let youtubeEmbedFrontend;
const getYoutubeEmbedFrontend = () => youtubeEmbedFrontend;
function setYoutubeEmbedFrontend(val) {
  youtubeEmbedFrontend = val;
  browser.storage.local.set({ youtubeEmbedFrontend })
  console.log("youtubeEmbedFrontend: ", youtubeEmbedFrontend)
}

let persistInvidiousPrefs;
const getPersistInvidiousPrefs = () => persistInvidiousPrefs;
function setPersistInvidiousPrefs(val) {
  persistInvidiousPrefs = val;
  browser.storage.local.set({ persistInvidiousPrefs })
  console.log("persistInvidiousPrefs: ", persistInvidiousPrefs)
}

let bypassWatchOnYoutube;
const getBypassWatchOnYoutube = () => bypassWatchOnYoutube;
function setBypassWatchOnYoutube(val) {
  bypassWatchOnYoutube = val;
  browser.storage.local.set({ bypassWatchOnYoutube })
  console.log("bypassWatchOnYoutube: ", bypassWatchOnYoutube)
}

let exceptions = {
  "url": [],
  "regex": [],
};
const getExceptions = () => exceptions;
function setExceptions(val) {
  exceptions = val;
  browser.storage.local.set({ youtubeEmbedExceptions: val })
  console.log("youtubeEmbedExceptions: ", val)
}

function isException(url) {
  for (const item of exceptions.url) {
    let protocolHost = `${url.protocol}//${url.host}`
    console.log(item, protocolHost)
    if (item == protocolHost) return true;
  }
  for (const item of exceptions.regex)
    if (new RegExp(item).test(url.href)) return true;
  return false;
}


let alwaysUsePreferred;
function redirect(url, details, initiator) {
  if (disable) return null;

  let protocolHost = `${url.protocol}//${url.host}`;

  let isInvidious = [
    ...redirects.invidious.normal,
    ...redirects.invidious.tor
  ].includes(protocolHost);

  let isCheckedInvidious = [
    ...invidiousNormalRedirectsChecks,
    ...invidiousNormalCustomRedirects,
    ...invidiousTorRedirectsChecks,
    ...invidiousTorCustomRedirects,
  ].includes(protocolHost);

  let isPiped = [
    ...redirects.piped.normal,
    ...redirects.piped.tor
  ].includes(protocolHost);

  let isCheckedPiped = [
    ...pipedNormalRedirectsChecks,
    ...pipedNormalCustomRedirects,
    ...pipedTorRedirectsChecks,
    ...pipedTorCustomRedirects,
  ].includes(protocolHost)

  if (
    alwaysUsePreferred && frontend == 'invidious' &&
    (isInvidious || isPiped) && !isCheckedInvidious
  ) return changeInstance(url);

  if (
    alwaysUsePreferred && frontend == 'piped' &&
    (isInvidious || isPiped) && !isCheckedPiped
  ) return changeInstance(url);

  if (!targets.some((rx) => rx.test(url.href))) return null;

  if (
    details.type != "main_frame" &&
    details.frameAncestors && details.frameAncestors.length > 0 &&
    isException(new URL(details.frameAncestors[0].url))
  ) {
    console.log(`Canceled ${url.href}`, details.frameAncestors[0].url)
    return null;
  }
  if (
    bypassWatchOnYoutube &&
    initiator && (
      [...redirects.invidious.normal,
      ...invidiousNormalCustomRedirects,
      ...redirects.invidious.tor,
      ...invidiousTorCustomRedirects,

      ...redirects.piped.normal,
      ...redirects.piped.tor,
      ...pipedNormalCustomRedirects,
      ...pipedTorCustomRedirects
      ].includes(initiator.origin)
    )
  ) return 'BYPASSTAB';

  if (url.pathname.match(/iframe_api/) || url.pathname.match(/www-widgetapi/)) return null; // Don't redirect YouTube Player API.

  if (frontend == 'yatte' && details.type === "main_frame")
    return url.href.replace(/^https?:\/\//, 'yattee://');

  else if (frontend == 'freetube' && details.type === "main_frame")
    return `freetube://${url}`;

  else if (frontend == 'freetube' && details.type !== "main_frame" && youtubeEmbedFrontend == "youtube")
    return null;

  else if (
    frontend == 'invidious' ||
    ((frontend == 'freetube' || frontend == 'yatte') && youtubeEmbedFrontend == 'invidious' && details.type == "sub_frame")
  ) {

    if (OnlyEmbeddedVideo == 'onlyEmbedded' && details.type !== "sub_frame") return null;
    if (
      OnlyEmbeddedVideo == 'onlyNotEmbedded' && details.type !== "main_frame" &&
      !((frontend == 'freetube' || frontend == 'yatte') && youtubeEmbedFrontend == 'invidious' && details.type === "sub_frame")
    ) return null;

    let instancesList;
    if (protocol == 'normal') instancesList = [...invidiousNormalRedirectsChecks, ...invidiousNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...invidiousTorRedirectsChecks, ...invidiousTorCustomRedirects];
    if (instancesList.length === 0) return null;
    let randomInstance = commonHelper.getRandomInstance(instancesList);

    return `${randomInstance}${url.pathname}${url.search}`;

  } else if (
    frontend == 'piped' ||
    ((frontend == 'freetube' || frontend == 'yatte') && youtubeEmbedFrontend == 'piped' && details.type === "sub_frame")
  ) {

    if (OnlyEmbeddedVideo == 'onlyEmbedded' && details.type !== "sub_frame") return null;
    if (
      OnlyEmbeddedVideo == 'onlyNotEmbedded' && details.type !== "main_frame" &&
      !((frontend == 'freetube' || frontend == 'yatte') && youtubeEmbedFrontend == 'piped' && details.type == "sub_frame")
    ) return null;

    let instancesList;
    if (protocol == 'normal') instancesList = [...pipedNormalRedirectsChecks, ...pipedNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...pipedTorRedirectsChecks, ...pipedTorCustomRedirects];
    if (instancesList.length === 0) return null;
    let randomInstance = commonHelper.getRandomInstance(instancesList);

    return `${randomInstance}${url.pathname}${url.search}`;
  }
  else if (frontend == 'pipedMaterial' ||
    ((frontend == 'freetube' || frontend == 'yatte') && youtubeEmbedFrontend == 'pipedMaterial' && details.type === "sub_frame")) {
    if (OnlyEmbeddedVideo == 'onlyEmbedded' && details.type !== "sub_frame") return null;
    if (
      OnlyEmbeddedVideo == 'onlyNotEmbedded' && details.type !== "main_frame" &&
      !((frontend == 'freetube' || frontend == 'yatte') && youtubeEmbedFrontend == 'pipedMaterial' && details.type == "sub_frame")
    ) return null;

    let instancesList;
    if (protocol == 'normal') instancesList = [...pipedMaterialNormalRedirectsChecks, ...pipedMaterialNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...pipedMaterialTorRedirectsChecks, ...pipedMaterialTorCustomRedirects];
    let randomInstance = commonHelper.getRandomInstance(instancesList);

    return `${randomInstance}${url.pathname}${url.search}`;
  }
  return 'CANCEL';
}

function changeInstance(url) {
  console.log("changeInstance Youtube");

  let protocolHost = `${url.protocol}//${url.host}`;

  console.log("protocolHost", protocolHost);

  if (
    protocol == 'normal' &&
    ![
      ...redirects.invidious.normal,
      ...redirects.piped.normal,
      ...redirects.pipedMaterial.normal,

      ...invidiousNormalCustomRedirects,
      ...pipedNormalCustomRedirects,
      ...pipedMaterialNormalCustomRedirects
    ].includes(protocolHost)
  ) return null;

  if (protocol == 'tor' &&
    ![
      ...redirects.invidious.tor,
      ...redirects.piped.tor,
      ...redirects.pipedMaterial.tor,

      ...invidiousTorCustomRedirects,
      ...pipedTorCustomRedirects,
      ...pipedMaterialTorCustomRedirects
    ].includes(protocolHost)
  ) return null;

  let instancesList;
  if (frontend == 'invidious') {
    if (protocol == 'normal') instancesList = [...invidiousNormalRedirectsChecks, ...invidiousNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...invidiousTorRedirectsChecks, ...invidiousTorCustomRedirects];
  }
  else if (frontend == 'piped') {
    if (protocol == 'normal') instancesList = [...pipedNormalRedirectsChecks, ...pipedNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...pipedTorRedirectsChecks, ...pipedTorCustomRedirects];
  }
  else if (frontend == 'pipedMaterial') {
    if (protocol == 'normal') instancesList = [...pipedMaterialNormalRedirectsChecks, ...pipedMaterialNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...pipedMaterialTorRedirectsChecks, ...pipedMaterialTorCustomRedirects];
  }
  else return null;

  console.log("instancesList", instancesList);
  let index = instancesList.indexOf(protocolHost);
  if (index > -1) instancesList.splice(index, 1);

  if (instancesList.length === 0) return null;
  let randomInstance = commonHelper.getRandomInstance(instancesList);
  return `${randomInstance}${url.pathname}${url.search}`;
}

function isPipedorInvidious(url, type, frontend) {
  let protocolHost = `${url.protocol}//${url.host}`;

  if (type !== "main_frame" && type !== "sub_frame") return false;

  if (frontend == 'invidious')
    return [
      ...redirects.invidious.normal,
      ...redirects.invidious.tor,
      ...invidiousNormalCustomRedirects,
      ...invidiousTorCustomRedirects,
    ].includes(protocolHost);

  if (frontend == 'piped')
    return [
      ...redirects.piped.normal,
      ...redirects.piped.tor,
      ...pipedNormalCustomRedirects,
      ...pipedTorCustomRedirects,
    ].includes(protocolHost);

  if (frontend == 'pipedMaterial')
    return [
      ...redirects.pipedMaterial.normal,
      ...redirects.pipedMaterial.tor,
      ...pipedMaterialNormalCustomRedirects,
      ...pipedMaterialTorCustomRedirects,
    ].includes(protocolHost);

  return [
    ...redirects.invidious.normal,
    ...redirects.invidious.tor,
    ...invidiousNormalCustomRedirects,
    ...invidiousTorCustomRedirects,

    ...redirects.piped.normal,
    ...redirects.piped.tor,
    ...pipedNormalCustomRedirects,
    ...pipedTorCustomRedirects,
  ].includes(protocolHost);
}

let applyThemeToSites;
function addUrlParams(url) {
  let protocolHost = `${url.protocol}//${url.host}`;
  let isChanged = false;
  console.log("Adding URL Params", protocolHost);
  console.log("searchParams", url.searchParams);
  let oldParams = { ...url.searchParams };
  if (
    [
      ...redirects.invidious.normal,
      ...redirects.invidious.tor,
      ...invidiousNormalCustomRedirects,
      ...invidiousTorCustomRedirects
    ].includes(protocolHost)
  ) {

    if (applyThemeToSites && !url.searchParams.has("dark_mode") && theme != 'DEFAULT') {
      if (theme == 'dark') url.searchParams.append("dark_mode", true);
      else if (theme == 'light') url.searchParams.append("dark_mode", false);
      isChanged = true;
    }

    if (!url.searchParams.has("volume") && volume != "--") {
      url.searchParams.append("volume", volume);
      isChanged = true;
    }

    if (!url.searchParams.has("autoplay") && autoplay != "DEFAULT") {
      url.searchParams.append("autoplay", autoplay);
      isChanged = true;
    }

    if (!url.searchParams.has("local") && invidiousAlwaysProxy != "DEFAULT") {
      url.searchParams.append("local", invidiousAlwaysProxy);
      isChanged = true;
    }

    if (!url.searchParams.has("quality") && invidiousVideoQuality != "DEFAULT") {
      url.searchParams.append("quality", invidiousVideoQuality);
      isChanged = true;
    }

    if (!url.searchParams.has("player_style") && invidiousPlayerStyle != "DEFAULT") {
      url.searchParams.append("player_style", invidiousPlayerStyle);
      isChanged = true;
    };

    if (!url.searchParams.has("subtitles") && invidiousSubtitles.trim() != '') {
      url.searchParams.append("subtitles", invidiousSubtitles);
      isChanged = true;
    }
  }
  else if (
    [
      ...redirects.piped.normal,
      ...redirects.piped.tor,
      ...pipedNormalCustomRedirects,
      ...pipedTorCustomRedirects,
    ].includes(protocolHost)
  ) {

    if (!url.searchParams.has("theme") && theme != "DEFAULT") {
      url.searchParams.append("theme", theme);
      isChanged = true;
    }

    if (!url.searchParams.has("volume") && volume != "--") {
      url.searchParams.append("volume", volume / 100);
      isChanged = true;
    }

    if (!url.searchParams.has("playerAutoPlay") && autoplay != "DEFAULT") {
      url.searchParams.append("playerAutoPlay", autoplay);
      isChanged = true;
    }
  }

  if (isChanged) return url.href;
  else return;
}


function initPipedLocalStorage(tabId) {
  browser.tabs.executeScript(
    tabId,
    {
      file: "/assets/javascripts/helpers/youtube/piped-preferences.js",
      runAt: "document_start"
    }
  );
}

function initPipedMaterialLocalStorage(tabId) {
  browser.tabs.executeScript(
    tabId,
    {
      file: "/assets/javascripts/helpers/youtube/pipedMaterial-preferences.js",
      runAt: "document_start"
    }
  );
}

function initInvidiousCookies(tabId) {
  browser.tabs.executeScript(
    tabId,
    {
      file: "/assets/javascripts/helpers/youtube/invidious-preferences.js",
      runAt: "document_start"
    }
  );
}

async function init() {
  return new Promise((resolve) => {
    fetch('/instances/data.json').then(response => response.text()).then(data => {
      let dataJson = JSON.parse(data);
      browser.storage.local.get(
        [
          "invidiousAlwaysProxy",
          "invidiousVideoQuality",
          "theme",
          "applyThemeToSites",
          "persistInvidiousPrefs",
          "disableYoutube",
          "OnlyEmbeddedVideo",
          "youtubeVolume",
          "invidiousPlayerStyle",
          "invidiousSubtitles",
          "youtubeAutoplay",
          "youtubeRedirects",
          "youtubeFrontend",

          "invidiousNormalRedirectsChecks",
          "invidiousNormalCustomRedirects",

          "invidiousTorRedirectsChecks",
          "invidiousTorCustomRedirects",

          "pipedNormalRedirectsChecks",
          "pipedNormalCustomRedirects",

          "pipedMaterialNormalRedirectsChecks",
          "pipedMaterialNormalCustomRedirects",

          "pipedMaterialTorRedirectsChecks",
          "pipedMaterialTorCustomRedirects",

          "pipedTorRedirectsChecks",
          "pipedTorCustomRedirects",
          "alwaysUsePreferred",
          "youtubeEmbedFrontend",

          "youtubeProtocol",

          "youtubeEmbedExceptions",
          "bypassWatchOnYoutube"
        ],
        r => { // r = result
          redirects.invidious = dataJson.invidious;
          if (r.youtubeRedirects) redirects = r.youtubeRedirects;

          disable = r.disableYoutube ?? false;
          protocol = r.youtubeProtocol ?? 'normal';
          frontend = r.youtubeFrontend ?? 'invidious';
          youtubeEmbedFrontend = r.youtubeEmbedFrontend ?? 'invidious';

          theme = r.theme ?? 'DEFAULT';
          applyThemeToSites = r.applyThemeToSites ?? false;

          volume = r.youtubeVolume ?? '--';
          autoplay = r.youtubeAutoplay ?? 'DEFAULT';

          invidiousAlwaysProxy = r.invidiousAlwaysProxy ?? 'DEFAULT';
          OnlyEmbeddedVideo = r.OnlyEmbeddedVideo ?? 'both';
          invidiousVideoQuality = r.invidiousVideoQuality ?? 'DEFAULT';
          invidiousPlayerStyle = r.invidiousPlayerStyle ?? 'DEFAULT';
          invidiousSubtitles = r.invidiousSubtitles || '';

          invidiousNormalRedirectsChecks = r.invidiousNormalRedirectsChecks ?? [...redirects.invidious.normal];
          invidiousNormalCustomRedirects = r.invidiousNormalCustomRedirects ?? [];

          invidiousTorRedirectsChecks = r.invidiousTorRedirectsChecks ?? [...redirects.invidious.tor];
          invidiousTorCustomRedirects = r.invidiousTorCustomRedirects ?? [];

          pipedNormalRedirectsChecks = r.pipedNormalRedirectsChecks ?? [...redirects.piped.normal];
          pipedNormalCustomRedirects = r.pipedNormalCustomRedirects ?? [];

          pipedTorRedirectsChecks = r.pipedTorRedirectsChecks ?? [...redirects.piped.tor];
          pipedTorCustomRedirects = r.pipedTorCustomRedirects ?? [];


          pipedMaterialNormalRedirectsChecks = r.pipedMaterialNormalRedirectsChecks ?? [...redirects.pipedMaterial.normal];
          pipedMaterialNormalCustomRedirects = r.pipedMaterialNormalCustomRedirects ?? [];

          pipedMaterialTorRedirectsChecks = r.pipedMaterialTorRedirectsChecks ?? [...redirects.pipedMaterial.tor];
          pipedMaterialTorCustomRedirects = r.pipedMaterialTorCustomRedirects ?? [];

          persistInvidiousPrefs = r.persistInvidiousPrefs ?? false;

          alwaysUsePreferred = r.alwaysUsePreferred ?? true;

          bypassWatchOnYoutube = r.bypassWatchOnYoutube ?? true;

          if (r.youtubeEmbedExceptions) exceptions = r.youtubeEmbedExceptions;

          resolve();
        });
    });
  })
}

export default {
  getBypassWatchOnYoutube,
  setBypassWatchOnYoutube,
  initInvidiousCookies,
  initPipedLocalStorage,
  initPipedMaterialLocalStorage,

  getFrontend,
  setFrontend,

  getYoutubeEmbedFrontend,
  setYoutubeEmbedFrontend,

  getRedirects,
  getCustomRedirects,
  setInvidiousRedirects,
  setPipedRedirects,

  redirect,
  changeInstance,

  isPipedorInvidious,
  addUrlParams,

  getDisable,
  setDisable,

  getProtocol,
  setProtocol,

  setInvidiousAlwaysProxy,
  getInvidiousAlwaysProxy,

  setOnlyEmbeddedVideo,
  getOnlyEmbeddedVideo,

  setInvidiousVideoQuality,
  getInvidiousVideoQuality,

  setTheme,
  getTheme,

  setVolume,
  getVolume,

  setInvidiousPlayerStyle,
  getInvidiousPlayerStyle,

  setInvidiousSubtitles,
  getInvidiousSubtitles,

  setAutoplay,
  getAutoplay,

  getPersistInvidiousPrefs,
  setPersistInvidiousPrefs,

  getInvidiousNormalRedirectsChecks,
  setInvidiousNormalRedirectsChecks,

  getInvidiousNormalCustomRedirects,
  setInvidiousNormalCustomRedirects,

  getPipedNormalRedirectsChecks,
  setPipedNormalRedirectsChecks,

  getPipedNormalCustomRedirects,
  setPipedNormalCustomRedirects,

  getInvidiousTorRedirectsChecks,
  setInvidiousTorRedirectsChecks,

  getInvidiousTorCustomRedirects,
  setInvidiousTorCustomRedirects,

  getPipedTorRedirectsChecks,
  setPipedTorRedirectsChecks,

  getPipedTorCustomRedirects,
  setPipedTorCustomRedirects,

  getPipedMaterialNormalRedirectsChecks,
  setPipedMaterialNormalRedirectsChecks,

  getPipedMaterialNormalCustomRedirects,
  setPipedMaterialNormalCustomRedirects,

  getPipedMaterialTorRedirectsChecks,
  setPipedMaterialTorRedirectsChecks,

  getPipedMaterialTorCustomRedirects,
  setPipedMaterialTorCustomRedirects,

  setPipedMaterialRedirects,

  getExceptions,
  setExceptions,
  isException,

  init,
};