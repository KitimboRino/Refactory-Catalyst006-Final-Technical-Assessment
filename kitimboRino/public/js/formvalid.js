// Acessing the parts by name.
const sname = document.regForm.surName;
const gname = document.regForm.givenName;
const dob = document.regForm.dateOfBirth;
const pOr = document.regForm.placeOfResidence;
const occu = document.regForm.occupation;
const cate = document.regForm.category;

const sname_error = document.getElementById('sName');
const gname_error = document.getElementById('gName');
const dob_error = document.getElementById('db');
const pOr_error = document.getElementById('pR');
const occu_error = document.getElementById('occup');
const Nat_error = document.getElementById('Nat');

// Event handlers
sname.addEventListener('blur', sName_Verify, true);
gname.addEventListener('blur', gName_Verify, true);
dob.addEventListener('blur', dob_Verify, true);
pOr.addEventListener('blur', pOr_Verify, true);
occu.addEventListener('blur', occu_Verify, true);
Nat.addEventListener('blur', Nat_Verify, true);

// Validations
function Validate() {
  if (sname.value == '') {
    sname.style.border = '1px solid red';
    sname_error.textContent = 'This field is required';
    sname.focus();
    return false;
  }

  if (gname.value == '') {
    gname.style.border = '1px solid red';
    gname_error.textContent = 'This field is required';
    gname.focus();
    return false;
  }

  if (dob.value == '') {
    dob.style.border = '1px solid red';
    dob_error.textContent = 'Select Date of Birth';
    dob.focus();
    return false;
  }

  if (pOr.value == '') {
    pOr.style.border = '1px solid red';
    pOr_error.textContent = 'This field is required';
    pOr.focus();
    return false;
  }

  if (occu.value == '') {
    occu.style.border = '1px solid red';
    occu_error.textContent = 'This field is required';
    occu.focus();
    return false;
  }

  if (Nat.value == '') {
    Nat.style.border = '1px solid red';
    Nat_error.textContent = 'This field is required';
    Nat.focus();
    return false;
  }

  if (cate.value == '') {
    count.style.border = '1px solid red';
    count_error.textContent = 'Select country';
    count.focus();
    return false;
  }

}

// Regexes
const nameRegex = /^.{2,15}[a-zA-Z]+$/;
const alphaNumeric = /^[0-9a-zA-Z]+$/;
const residenceRegex = /^.{2,19}[a-zA-Z]+$/;
const occupationRegex = /^.{6,49}[a-zA-Z]+$/;
const nationalityRegex = /^.{5,19}[a-zA-Z]+$/;

function sName_Verify() {
    if (sname.value != '' && fname.value.match(nameRegex)) {
      return true;
    } else {
      sname.style.border = '1px solid red';
      sname_error.textContent = 'first name must be 2 to 15 characters';
      return false;
    }
  }
  
  function gName_Verify() {
    if (gname.value != '' && gname.value.match(nameRegex)) {
      gname_error.innerHTML = '';
      return true;
    } else {
      gname.style.border = '1px solid red';
      gname_error.textContent = 'last name must be 2 to 50 characters';
      return false;
    }
  }
  

  function pOr_Verify() {
    if (pOr.value != '' && uname.value.match(residenceRegex)) {
      pOr_error.innerHTML = '';
      return true;
    } else {
      pOr.style.border = '1px solid red';
      pOr_error.textContent = 'Username must be 2 to 50 characters';
      return false;
    }
  }

  function Nat_Verify() {
    if (Nat.value != '' && uname.value.match(nationalityRegex)) {
      Nat_error.innerHTML = '';
      return true;
    } else {
      Nat.style.border = '1px solid red';
      Nat_error.textContent = 'Username must be 2 to 50 characters';
      return false;
    }
  }