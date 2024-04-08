function showConfirmationModal(e) {
  e.preventDefault();

  const action = e.detail.elt.dataset.action;

  const confirmationModal = `
    <dialog class="modal">
      <div id="confirmation">
        <h2>Are you sure?</h2>
        <p>Do you really want to ${action} this place?</p>
        <div id="confirmation-actions">
          <button id="action-no" className="button-text">
            No
          </button>
          <button id="action-yes" className="button">
            Yes
          </button>
        </div>
      </div>
    </dialog>
  `;

  document.body.insertAdjacentHTML("beforeend", confirmationModal);
  const dialog = document.querySelector("dialog");

  const noBtn = document.getElementById("action-no");
  noBtn.addEventListener("click", () => dialog.remove());

  const yesBtn = document.getElementById("action-yes");
  yesBtn.addEventListener("click", () => {
    e.detail.issueRequest();
    dialog.remove();
  });

  dialog.showModal();
}

document.addEventListener("htmx:confirm", showConfirmationModal);
