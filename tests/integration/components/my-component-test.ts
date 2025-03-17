import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, type TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from '@glimmer/tracking';
import { setOwner } from '@ember/owner';
import type Owner from '@ember/owner';

interface Context extends TestContext {
  element: HTMLElement;
  model: Model;
}

class Model {
  constructor(owner: Owner) {
    setOwner(this, owner);
  }

  @tracked emailAddress = '';
}

module('Integration | Component | common/validation-message', function (hooks) {
  setupRenderingTest(hooks);

  test<Context>('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const model = new Model(this.owner);

    this.model = model;

    await render<Context>(hbs`{{this.model.emailAddress}}`);

    assert.notEqual(this.element?.textContent, '');
  });
});
