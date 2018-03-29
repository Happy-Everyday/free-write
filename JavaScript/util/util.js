/**
 * 工具函数
 * 
 * 跨浏览器的事件对象
 * cookie用法
 */

// 跨浏览器的事件对象
var eventUtil = {
    // 添加事件处理程序
    addHandler: function(ele, type, handler) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
        } else if (ele.attachEvent) {
            ele.attachEvent('on' + type, handler, false); // IE            
        } else {
            ele['on' + type] = handler;
        }
    },
    // 获取事件对象
    getEvent: function(event) {
        return event? event: window.event;
    },
    // 获取Target对象
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    // 阻止默认事件
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false; // IE
        }
    },
    // 阻止事件冒泡
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true; // IE
        }
    },
    // 移除事件处理程序
    removeHandler: function(ele, type, handler) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if (ele.detachEvent) {
            ele.detachEvent('on' + type, handler, false); // IE            
        } else {
            ele['on' + type] = null;
        }
    }
}

// cookie用法
var cookieUtil = {
    getCookie: function(name) {
        var cookieName = encodeURIComponent(name) + '=',
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    setCookie: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += '; expires=' + expires.toGMTString();
        }

        if (path) {
            cookieText += '; path=' + path;
        }

        if (domain) {
            cookieText += '; domain=' + domain;
        }

        if (secure) {
            cookieText += '; secure';
        }

        document.cookie = cookieText;
    },
    delCookie: function(name, path, domain, secure) {
        this.setCookie(name, '', new Date(0), path, domain, secure);
    }
}