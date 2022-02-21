import PouchDB from "pouchdb-browser";
import lf from 'pouchdb-find'
import plf from 'pouchdb-live-find'
import PouchDBAuthentication from 'pouchdb-authentication';

PouchDB.plugin(lf)
PouchDB.plugin(plf)
PouchDB.plugin(PouchDBAuthentication);
import Vue from 'vue';
import PouchVue from 'pouch-vue';

Vue.use(require("vue-pouch"), {
  pouch: PouchDB,    // optional if `PouchDB` is available on the global object
  defaultDB: 'config',  // this is used as a default connect/disconnect database
  optionsDB: {
    fetch: function (url, opts) {
        opts.credentials = 'include';
        return PouchDB.fetch(url, opts);
    }
  }
// optional - See `https://pouchdb.com/api.html#debug_mode` for valid settings (will be a separate Plugin in PouchDB 7.0)
});