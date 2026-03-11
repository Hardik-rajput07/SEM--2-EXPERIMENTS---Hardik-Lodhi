"use strict"

let age = 20;


switch (age) {
    case 18:
        window.alert("You just Got 18! \nYou can Apply For Learning DL Now.")
        break;

    case 50:
        window.alert("You are 50! \nApply For New DL Now.")
        break;

    default:
        if (age > 18) {
            window.alert("Your age is : " + age + "\nYou are allowed to Drive a Car.");
        }
        else {
            window.alert("Your age is : " + age + "\nYou are a Minor, Can't Drive");
        }

        break;
}