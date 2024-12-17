var masterCode = "";
var sets = [
    {
        title: "Set 1",
        code: "xrWX1PC4KB",
        tasks: [
            "Set 1 Task 1",
            "Set 1 Task 2",
            "Set 1 Task 3",
            "Set 1 Task 4",
            "Set 1 Task 5"
        ]
    },{
        title: "Set 2",
        code: "hVLoZesqYj",
        tasks: [
            "Set 2 Task 1",
            "Set 2 Task 2",
            "Set 2 Task 3",
            "Set 2 Task 4",
            "Set 2 Task 5"
        ]
    },{
        title: "Set 3",
        code: "IxGkkJ4a3h",
        tasks: [
            "Set 3 Task 1",
            "Set 3 Task 2",
            "Set 3 Task 3",
            "Set 3 Task 4",
            "Set 3 Task 5"
        ]
    },{
        title: "Set 4",
        code: "DUHFLhW2n4",
        tasks: [
            "Set 4 Task 1",
            "Set 4 Task 2",
            "Set 4 Task 3",
            "Set 4 Task 4",
            "Set 4 Task 5"
        ]
    },{
        title: "Set 5",
        code: "0CRDiyeyg5",
        tasks: [
            "Set 5 Task 1",
            "Set 5 Task 2",
            "Set 5 Task 3",
            "Set 5 Task 4",
            "Set 5 Task 5"
        ]
    },{
        title: "Set 6",
        code: "MSesoeZaH2",
        tasks: [
            "Set 6 Task 1",
            "Set 6 Task 2",
            "Set 6 Task 3",
            "Set 6 Task 4",
            "Set 6 Task 5"
        ]
    },{
        title: "Set 7",
        code: "3daWslktHh",
        tasks: [
            "Set 7 Task 1",
            "Set 7 Task 2",
            "Set 7 Task 3",
            "Set 7 Task 4",
            "Set 7 Task 5"
        ]
    },{
        title: "Set 8",
        code: "igntzDZ2wf",
        tasks: [
            "Set 8 Task 1",
            "Set 8 Task 2",
            "Set 8 Task 3",
            "Set 8 Task 4",
            "Set 8 Task 5"
        ]
    },{
        title: "Set 9",
        code: "tG4NWxpZsM",
        tasks: [
            "Set 9 Task 1",
            "Set 9 Task 2",
            "Set 9 Task 3",
            "Set 9 Task 4",
            "Set 9 Task 5"
        ]
    },{
        title: "Set 10",
        code: "UruKBovqYt",
        tasks: [
            "Set 10 Task 1",
            "Set 10 Task 2",
            "Set 10 Task 3",
            "Set 10 Task 4",
            "Set 10 Task 5"
        ]
    },
]

function createTasks(set) {
    var value = ``;
    for(var i = 0; i < sets[set].tasks.length; i++) {
        value += `<li id="Task${i}">${sets[set].tasks[i]}</li>`;
    }
    //value = `<li id="Task${i}">${sets[set].tasks[]}</li>`
    return value;
}

function createSet(set) {
    return `
        <ol w-50 id="Tasks">
            <p>${sets[set].title}</p> <br>
            ${createTasks(set)}
        </ol>
        
        <br><hr><br>
    `;
}

function getSet(code) {
    document.getElementById("Set").innerHTML = "";
    if(code == masterCode) {
        var value = '';
        for(var i = 0; i < sets.length; i++) {
            value += createSet(i);
        }
        document.getElementById("Set").innerHTML = value;
    } else {
        for(var i = 0; i < sets.length; i++) {
            if(code == sets[i].code) {
                document.getElementById("Set").innerHTML = createSet(i);
            }
        }
    }
}