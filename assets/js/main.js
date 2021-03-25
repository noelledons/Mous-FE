import staffMembers from 'assets/js/_incs/data.js';

// Selectors
const selectors = {
  viewStaffBtn: '[el="staff-btn"]',
  staffList: '[el="staff-list"]'
};

let isStaffShown = false;

// Click event listeners
const setClickEvents = () => {
  document.querySelector(selectors.viewStaffBtn).addEventListener('click', () => {
    if (!isStaffShown) {
      getStaffList();
    }
  });
};

// Return the HTML markup for a staff member
const getStaffList = () => {
  const staffList = document.querySelector(selectors.staffList);

  staffMembers.forEach((member, i) => {
    const staffMemberDiv = document.createElement('div');
    staffMemberDiv.className = 'staff-member';
    staffMemberDiv.style.animationDelay = `${i * 0.4}s`;

    const staffMemberImage = document.createElement('img');
    staffMemberImage.src = member.img;
    staffMemberImage.className = 'staff-image';

    const staffMemberText = document.createElement('div');
    staffMemberText.className = 'staff-text';
    staffMemberText.innerHTML = `${member.name}<br>${member.occupation}<br>${member.team}`

    staffMemberDiv.append(staffMemberImage);
    staffMemberDiv.append(staffMemberText);

    staffList.append(staffMemberDiv);
  });

  isStaffShown = true;
};

// Initialise the script
const init = () => {
  setClickEvents()
}

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  init()
})