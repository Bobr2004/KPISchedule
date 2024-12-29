const parseRole = (str: string) => {
   const role = str.split("role=")[1].slice(0, -1);
   return role;
};

const parseFirstName = (str: string) => {
   const firstName = str.split("firstName=")[1].split(",")[0];
   return firstName;
};
const parseLastName = (str: string) => {
   const lastName = str.split("lastName=")[1].split(",")[0];
   return lastName;
};

const parseEmail = (str: string) => {
   const email = str.split("email=")[1].split(",")[0];
   return email;
};

export { parseRole, parseFirstName, parseLastName, parseEmail };
