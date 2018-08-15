//时间转换为6-15
export function getTime(timeStamp) {
	var date = new Date()
	date.setTime(timeStamp)
	var m = date.getMonth() + 1
	var d = date.getDate()
	return m + '-' + d
}

//时间转换为2018-6-15
export function getTime1(timeStamp) {
	var date = new Date()
	date.setTime(timeStamp)
	var y = date.getFullYear()
	var m = date.getMonth() + 1
	var d = date.getDate()
	return y + '-' + m + '-' + d
}
//时间转换为2018-6-15 9:01
export function getTime2(timeStamp) {
	var date = new Date()
	date.setTime(timeStamp)
	var y = date.getFullYear()
	var m = date.getMonth() + 1
	var d = date.getDate()
	var h = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()
	return y + '-' + m + '-' + d + ' ' + h + ':' + minute
}

//获取cookie、
export function  getCookie (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//设置cookie,增加到vue实例方便全局调用
export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
 
//删除cookie
export function delCookie (cname){	
	setCookie(cname,'','-1');
}