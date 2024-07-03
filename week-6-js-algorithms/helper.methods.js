class Helpers {
  filterMatchesByLocationAndStatus(response) {
    let matches = [];

    response.matches.filter((match) => {
      if (match.locationlvl1 === "Germany" && match.status === "canceled") {
        matches.push(match.matchId);
      }
    });

    return matches;
  }

  filterMatchesByCoatingAndShower(response) {
    
    let matches = [];

    response.matches.filter((match) => {
      if (match.matchInfo.coating === "Main.artificialGrass" && match.matchInfo.isShower === true) {
        matches.push(match.matchId);
      }
    });

    return matches;
  }

  filterMatchesByLocationAndPrice(response) {

    let matches = [];

    response.matches.filter((match) => {
      if (match.locationlvl2 === "Berlin" && match.price > 0) {
        matches.push(match.matchId);
      }
    });

    return matches;
  }

  filterMatchesByCreatorFeeAndStatus(response) {

    let matches = [];

    response.matches.filter((match) => {
      if (match.creatorFeePerPlayer > 3 && match.status === "canceled") {
        matches.push(match.matchId);
      }
    });

    return matches;
  }

  filterMatchesByCoveringAndDressingRoom(response) {

    let matches = [];

    response.matches.filter((match) => {
      if (match.matchInfo.covering === "Main.onTheStreet" && match.matchInfo.isDressingRoom === true) {
        matches.push(match.matchId);
      }
    });

    return matches;
  }
}

export default new Helpers();
