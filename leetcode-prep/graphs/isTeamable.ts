/*
You are tasked with splitting the 7th grade class into two teams for a soccer game.
Given a list of students and their enemie aka the kids they can't be on the same team as,
determine whether it is possible to split the class in tow in such a way that no child is on 
the same team as any of their enemies. If possible, return the two teams

Example:
David: [Lucy, Jose, Chris]
Lucy: [David, Brian, Emily]
Jose: [Lucy, Jack]
Paul: [Jose, Chris]
Chris: [Paul, David, Brian]
Brian: [Lucy, Chris, Jack]
Jack: [Brian, Emily]


*/

import { GNode } from "./graph";

function isTeamable(kids: any) {
  const graph = new Graph();
}

class Graph {
  nodes: GNode[];

  constructor(nodes: GNode[] = []) {
    this.nodes = [...nodes];
  }

  addNode(node: GNode) {
    this.nodes.push(node);
  }

  divideIntoTwoTeams() {
    if (this.isBipartite()) {
      const teamRed: GNode[] = [];
      const teamBlue: GNode[] = [];
      for (const node of this.nodes) {
        if (node.color === "red") {
          teamRed.push(node);
        } else {
          teamBlue.push(node);
        }
      }

      return { teamRed, teamBlue };
    } else {
      return false;
    }
  }

  isBipartite() {
    const visited = new Set<GNode>();
    let isBi = true;
    for (const node of this.nodes) {
      if (!visited.has(node)) {
        isBi &&= this.applyLegalColoring(node, visited);
      }
    }

    return isBi;
  }

  applyLegalColoring(node: GNode, visited: Set<GNode>) {
    if (!node.color) node.color = "red";
    visited.add(node);
    for (const adjacentNode of node.adjacentList) {
      if (!visited.has(adjacentNode)) {
        adjacentNode.color = node.color === "red" ? "blue" : "red";
        if (!this.applyLegalColoring(adjacentNode, visited)) {
          return false;
        }
      } else {
        if (adjacentNode.color === node.color) {
          return false;
        }
      }
    }

    return true;
  }
}

const lucy = new GNode("Lucy");
const jack = new GNode("Jack");
const emily = new GNode("Emily");
const brian = new GNode("Brian");
const david = new GNode("David");
const jose = new GNode("Jose");
const chris = new GNode("Chris");
const paul = new GNode("Paul");

const graph = new Graph([jack, emily, lucy, brian, david, jose, chris, paul]);
jack.connect(emily);
jack.connect(brian);
emily.connect(lucy);
lucy.connect(brian);
lucy.connect(david);
brian.connect(chris);
david.connect(chris);
david.connect(jose);
jose.connect(paul);
chris.connect(paul);

// jose.connect(chris)

console.log("Is Bipartrite: ", graph.divideIntoTwoTeams());
