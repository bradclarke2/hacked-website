function AntiHacker(name) {
    var antiHackerName = name;

    function returnAntiHackerName() {
        return antiHackerName;
    }

    return {antiHackerName: antiHackerName, returnAntiHackerName: returnAntiHackerName}

}
