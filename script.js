var ex = document.getElementById("expence-type");
var dis = document.getElementById("description");
var am = document.getElementById("amount");
var usersList = document.getElementById("users");

// Handling form submission
document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Get the values of the input fields
    var expenseTypeValue = ex.value;
    var descriptionValue = dis.value;
    var amountValue = am.value;

    // Store data in local storage
    localStorage.setItem("expence", expenseTypeValue);
    localStorage.setItem("description", descriptionValue);
    localStorage.setItem("amount", amountValue);

    // Clear the input fields after submission
    ex.value = "";
    dis.value = "";
    am.value = "";

    // Display the stored data in the user list
    displayUserData();
});

// Function to display the stored user data in the user list
function displayUserData() {
    var expenceValue = localStorage.getItem("expence");
    var descriptionValue = localStorage.getItem("description");
    var amountValue = localStorage.getItem("amount");

    var listItem = document.createElement("li");
    listItem.textContent = "Expense Type: " + expenceValue + ", Description: " + descriptionValue + ", Amount: " + amountValue;

    // Create an "Edit" button for each entry
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
        // Display the stored data in the input fields for editing
        ex.value = expenceValue;
        dis.value = descriptionValue;
        am.value = amountValue;
    });

    // Create a "Delete" button for each entry
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        // Remove the data from local storage
        localStorage.removeItem("expence");
        localStorage.removeItem("description");
        localStorage.removeItem("amount");

        // Remove the list item from display
        listItem.remove();
    });

    // Append the edit and delete buttons to the list item
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Append the list item to the user list
    usersList.appendChild(listItem);
}
