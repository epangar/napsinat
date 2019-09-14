Array.prototype.compareWith = function (input, deeply) {

    if (!input || input.length !== this.length) {
        return false;
    } else {

        if (!deeply || typeof (deeply) !== Boolean || deeply === false) {
            var copyThis = this.map(function (e) { return e }).sort(),
                copyInput = input.map(function (e) { return e }).sort()

            for (i in copyThis) {
                if (copyThis[i] !== copyInput[i]) {
                    return false
                }
            }

            return true
        } else {

            for (i in this) {
                if (this[i] !== input[i]) {
                    return false
                }
            }

            return true

        }
    }

}
