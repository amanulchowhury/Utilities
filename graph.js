/**
 * Created by amanulchowdhury.
 */

class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.numberofEdges = 0;
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if(vertex1 === vertex2) {
            return;
        }

        if(!this.edges[vertex1].includes(vertex2)) {
            this.edges[vertex1].push(vertex2);
        }

        if(!this.edges[vertex2].includes(vertex1)) {
            this.edges[vertex2].push(vertex1);
        }

    }

    findConnections(vertex, fn) {
        if(!~this.vertices.indexOf(vertex)) {
            throw Error(`Vertex ${vertex} not found`);
        }

        let visited = [];

        this.traverseDFS(vertex, visited, fn);
    }

    traverseDFS(vertex, visited, fn) {
        visited[vertex] = true;

        if(this.edges[vertex]) {
            fn(vertex);
        }

        for(let i = 0; i < this.edges[vertex].length; i++) {
            if(!visited[this.edges[vertex][i]]) {
                this.traverseDFS(this.edges[vertex][i], visited, fn);
            }
        }
    }

    getEdges(id) {
        let list = [id];

        if(this.edges[id]) {
            list = list.concat(this.edges[id]);
        }

        return list;
    }
}


function createGraph(data) {
    let userGraph = new Graph();

    //add vertices
    for(let i = 0; i < data.length; i++){
        userGraph.addVertex(data[i].id);
    }

    return userGraph;
}

function createConnections(graph, data) {
    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data.length; j++) {
            if(data[i].email === data[j].email || data[i].phone === data[j].phone) {
                graph.addEdge(data[i].id, data[j].id);
            }
        }
    }
}

function findDupConnections(graph) {
    let found = [];
    let connections = {};

    graph.vertices.forEach((vertex) => {
        if(!found.includes(vertex)) {
            graph.findConnections(vertex, (item) => {
                if(connections[vertex]) {
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


let data = [
    {name: 'jo', email: 'mu23n@hotmail.com', phone: '5712260246', id: 1},
    {name: 'munna', email: 'mu23nster@hotmail.com', phone: '5712260220', id: 2},
    {name: 'amanul', email: 'mu23n@hotmail.com', phone: '5712260220', id: 3},
    {name: 'johanna', email: 'mu23n@hotmail.com', phone: '5712261246', id: 4},
    {name: 'johanna1', email: 'mu23n1@hotmail.com', phone: '5712232246', id: 5}
];


let graph = createGraph(data);

createConnections(graph, data);

let dups = findDupConnections(graph);



