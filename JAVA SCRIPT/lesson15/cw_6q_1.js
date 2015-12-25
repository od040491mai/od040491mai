/**
 * Created by pastushenko-av on 25.11.2015.
 */
function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, "fullName", {
        set: function(value) {
            var parts = value.split(" ");
            if (parts.length === 2) {
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
        },
        get: function() {
            return this.firstName + ' ' + this.lastName;
        }
    });
}