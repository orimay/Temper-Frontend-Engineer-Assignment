describe('Temper Frontend Engineer Assignment', () => {
  it('swaps posts', () => {
    cy.visit('/');

    movePost(2, 'down');

    ensurePostsOrder([1, 3, 2, 4, 5]);
  });

  it('stores timeline entries in reverse upon posts swaps', () => {
    cy.visit('/');

    movePost(2, 'down');
    movePost(3, 'up');
    movePost(4, 'down');

    ensureTimelineOrder([4, 3, 2]);
  });

  it('records post reordering and rewinds', () => {
    cy.visit('/');

    movePost(2, 'down');
    movePost(4, 'down');
    movePost(3, 'up');
    rewind(1);

    ensurePostsOrder([1, 3, 2, 4, 5]);
  });
});

// Semantic helpers

function movePost(id: number, direction: 'up' | 'down') {
  cy.get(
    `[data-test-id="posts-list-item-${id}"] [data-test-id="${direction}"]`,
  ).click();
}

function rewind(entryIndex: number) {
  cy.get(`[data-test-id="time-travel-item-${entryIndex}"] button`).click();
}

function ensurePostsOrder(order: number[]) {
  for (const i in order) {
    cy.get('[data-test-id^="posts-list-item-"]')
      .eq(+i)
      .should('have.text', `Post ${order[i]}`);
  }
}

function ensureTimelineOrder(order: number[]) {
  for (const i in order) {
    cy.get('[data-test-id^="time-travel-item-"]')
      .eq(+i)
      .should('include.text', `post ${order[i]}`);
  }
}
