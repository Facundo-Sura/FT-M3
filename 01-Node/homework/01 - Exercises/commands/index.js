const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");
const { error } = require("console");

function pwd(print, args) {
    print(process.cwd());
}

function date(ptrint, args) {
    print(Date());
}

function echo(print, args) {
    print(args);
}

function ls(print, args) {
    fs.readdir(".", (error, files) => {
        if (error) throw new Error(error);
        print(files.join(" "));
    })
}

function cat(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw new Error(error);
        print(data);
    })
}

function head(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw new Error(error);
        const line = data.split("\n")[0];
        print(line);
    })
}

function tail(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw new Error(error);
        const lines = data.split("\n")[0];
        //const line = lines[lines.length -1].trim();
        const line = lines.pop().trim();
        print(line);
    })
}

function curl(print, args) {
    utils.request(args,  (error, response) => {
        if (error) throw new Error(error);
        print(response);
    })
}

module.exports = {pwd, date, echo, ls, cat, head, tail, curl};
