import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-42-карт-доступ-l');
  this.route('i-i-s-prilozhenie-42-карт-доступ-e',
  { path: 'i-i-s-prilozhenie-42-карт-доступ-e/:id' });
  this.route('i-i-s-prilozhenie-42-карт-доступ-e.new',
  { path: 'i-i-s-prilozhenie-42-карт-доступ-e/new' });
  this.route('i-i-s-prilozhenie-42-класс-уч-l');
  this.route('i-i-s-prilozhenie-42-класс-уч-e',
  { path: 'i-i-s-prilozhenie-42-класс-уч-e/:id' });
  this.route('i-i-s-prilozhenie-42-класс-уч-e.new',
  { path: 'i-i-s-prilozhenie-42-класс-уч-e/new' });
  this.route('i-i-s-prilozhenie-42-справ-долж-l');
  this.route('i-i-s-prilozhenie-42-справ-долж-e',
  { path: 'i-i-s-prilozhenie-42-справ-долж-e/:id' });
  this.route('i-i-s-prilozhenie-42-справ-долж-e.new',
  { path: 'i-i-s-prilozhenie-42-справ-долж-e/new' });
  this.route('i-i-s-prilozhenie-42-справ-сотр-l');
  this.route('i-i-s-prilozhenie-42-справ-сотр-e',
  { path: 'i-i-s-prilozhenie-42-справ-сотр-e/:id' });
  this.route('i-i-s-prilozhenie-42-справ-сотр-e.new',
  { path: 'i-i-s-prilozhenie-42-справ-сотр-e/new' });
  this.route('i-i-s-prilozhenie-42-справ-уч-l');
  this.route('i-i-s-prilozhenie-42-справ-уч-e',
  { path: 'i-i-s-prilozhenie-42-справ-уч-e/:id' });
  this.route('i-i-s-prilozhenie-42-справ-уч-e.new',
  { path: 'i-i-s-prilozhenie-42-справ-уч-e/new' });
});

export default Router;
