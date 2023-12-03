// ▸▾
//⯅⯆⯇⯈';
document.getElementById('CardGameTab').textContent = "▾ Card Games";
document.getElementById('ArcadeGameTab').textContent = "▾ Arcade Games";
document.getElementById('OtherGameTab').textContent = "▾ Other Games";
document.getElementById('PlaceholderGameTab').textContent = "▾ Placeholder Games";

const icons = {
    arrows: {
        left: "▸",
        down: "▾",
    },
    file: {
        close: "▸",
        open: "▾"
    }
}

var folders = {
    CardGames: {
        isOpen: false,
        name: "Card Games",
        tabID: "CardGameTab",
        tabs: ["BlackjackButton","PokerButton"]
    },
    ArcadeGames: {
        isOpen: false,
        name: "Arcade Games",
        tabID: "ArcadeGameTab",
        tabs: ["BrickBreakerButton","PacManButton"]
    },
    OtherGames: {
        isOpen: false,
        name: "Other Games",
        tabID: "OtherGameTab",
        tabs: ["TicTacToeButton","FlappyBirdButton"]
    },
    PlaceholderGames: {
        isOpen: false,
        name: "Placeholder Games",
        tabID: "PlaceholderGameTab",
        tabs: ["Placeholder1Button","Placeholder2Button","Placeholder3Button","Placeholder4Button"]
    }
};

function getFolderName(folder) {
    if (folder == `Card Games`)
        return `CardGames`;
    else if (folder == `Arcade Games`)
        return `ArcadeGames`;
    else if (folder == `Other Games`)
        return `OtherGames`;
    else if (folder == `Placeholder Games`)
        return `PlaceholderGames`;
    else 
        return null;
}

function editFolder(folder) {
    var folderName = getFolderName(folder);
    
    if(folders[folderName].isOpen) {
        closeFolder(folder);
        folders[folderName].isOpen = false;
    }
    else {
        openFolder(folder);
        folders[folderName].isOpen = true;
    }
}

function displayTabs(folder, status) {
    for (var tabIndex = 0; tabIndex < folders[folder].tabs.length; tabIndex ++) {
        document.getElementById(folders[folder].tabs[tabIndex]).style.display = status;
    }
}

function openFolder(folder) {
    displayTabs(getFolderName(folder),"inline-block");
    document.getElementById(folders[getFolderName(folder)].tabID).textContent = `${icons.file.open} ${folders[getFolderName(folder)].name}`;
}

function closeFolder(folder) {
    displayTabs(getFolderName(folder),"none");
    document.getElementById(folders[getFolderName(folder)].tabID).textContent = `${icons.file.close} ${folders[getFolderName(folder)].name}`;
}