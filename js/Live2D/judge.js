(function showEruda() {
    var live2d = localStorage.getItem('live2d');
    if (live2d === 'false') {
        self.location.href="javascript:localStorage.setItem('live2d','true')";
    } else if (eruda === 'true') {
        self.location.href="javascript:localStorage.setItem('live2d','false')";
    }
}
