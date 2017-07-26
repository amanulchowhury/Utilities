/**
 * Created by amanulchowdhury.
 */

/**
 * Class to represent a graph data structure.
 */
class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
    this.numberofEdges = 0;
  }

  /**
	 * Adds a vertex
	 * @param vertex the vertex to add to the graph
	 */
  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  /**
	 * Adds edges for two vertices.
	 * @param vertex1 the first vertex
	 * @param vertex2 the second vertex
	 */
  addEdge(vertex1, vertex2) {
    if (!this.edges[vertex1].includes(vertex2)) {
      this.edges[vertex1].push(vertex2);
    }

    if (!this.edges[vertex2].includes(vertex1)) {
      this.edges[vertex2].push(vertex1);
    }
  }

  /**
	 * Finds all vertices which are connected by at least one path to the given vertex
	 * @param vertex the starting vertex
	 * @param fn callback which is called with the edges for each found vertex.
	 */
  findConnections(vertex, fn) {
    if (!~this.vertices.indexOf(vertex)) {
      throw Error(`Vertex ${vertex} not found`);
    }

    let visited = [];

    this.traverseDFS(vertex, visited, fn);
  }

  /**
	 * Depth First Search
	 * @param vertex vertex to start from
	 * @param visited array of visited vertices.
	 * @param fn callback which is called with edges for the given vertex.
	 */
  traverseDFS(vertex, visited, fn) {
    visited[vertex] = true;

    if (this.edges[vertex]) {
      fn(vertex);
    }

    for (let i = 0; i < this.edges[vertex].length; i++) {
      if (!visited[this.edges[vertex][i]]) {
        this.traverseDFS(this.edges[vertex][i], visited, fn);
      }
    }
  }

  /**
	 * Gets all edges for a vertex
	 * @param vertex
	 * @returns {Array} List of all edges for the vertex
	 */
  getEdges(vertex) {
    let list = [];

    if (!this.edges[vertex] || !this.edges[vertex].length) {
      return null;
    }

    list = list.concat(this.edges[vertex]);
    list.unshift(vertex);

    return list;
  }
}

/**
 * Creates the graph from given data.
 * @param data List of objects
 * @returns {Graph}
 */
function createGraph(data) {
  let userGraph = new Graph();

  //add vertices
  for (let i = 0; i < data.length; i++) {
    userGraph.addVertex(data[i].id);
  }

  return userGraph;
}

/**
 * Creates edges for the given data in the graph
 * @param graph
 * @param data
 */
function createConnections(graph, data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      // don't need to go through the last ones.
      if (data[i].email === data[j].email || data[i].phone === data[j].phone) {
        graph.addEdge(data[i].id, data[j].id);
      }
    }
  }
}

/**
 * Finds all connected Vertices which
 * @param graph
 * @returns {{}}
 */
function findDupConnections(graph) {
  let found = [];
  let connections = {};

  graph.vertices.forEach(vertex => {
    if (!found.includes(vertex)) {
      graph.findConnections(vertex, item => {
        if (connections[vertex]) {
          connections[vertex].push(item);
        } else {
          connections[vertex] = [];
        }
        found.push(item);
      });
    }
  });

  return connections;
}

function run(data) {
  let graph = createGraph(data);

  createConnections(graph, data);

  return findDupConnections(graph);
}

module.exports = run;
