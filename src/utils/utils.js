export const splitName = (str) => {
  return /(?=[A-Z])/g[Symbol.split](str).map((el, idx) => {
    if (idx === 0) {
      return el.charAt(0).toUpperCase() + el.slice(1);
    } else {
      return el.charAt(0).toLowerCase() + el.slice(1);
    }
  }).join(' ')
};

export const getLocalIp = () => new Promise ((resolve, reject) => {
  window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;//compatibility for Firefox and chrome
  let pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};
  pc.createDataChannel('');
  pc.createOffer().then((offer) => {
    pc.setLocalDescription(offer);
  }).catch((err) => reject(err));
  pc.onicecandidate = function(ice) {
    if (ice && ice.candidate && ice.candidate.candidate) {
      let parts = ice.candidate.candidate.split(' ');
      let [base,componentId,protocol,priority,ip,port,,type,...attr] = parts;
      pc.onicecandidate = noop;
      return resolve(ip);
    }
  };
})