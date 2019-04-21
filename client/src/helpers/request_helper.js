const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function () {
  // fetch(request, {mode: 'cors'});

  return fetch(this.url, {mode: 'cors'})
    .then((response) => response.json())
    .catch(err => console.log(err));
};

RequestHelper.prototype.post = function (payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json());
};

RequestHelper.prototype.delete = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE'
  })
    .then((response) => response.json());
};

module.exports = RequestHelper;
