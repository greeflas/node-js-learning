exports.getMemHelper = size => ({
    size: size,

    toKb() {
        return this._returnRes(this.size / 1024);
    },

    toMb() {
        return this._returnRes(this.size / 1024 / 1024);
    },

    toGb() {
        return this._returnRes(this.size / 1024 / 1024 / 1024);
    },

    _returnRes(rawRes) {
        return Math.floor(rawRes);
    }
});
