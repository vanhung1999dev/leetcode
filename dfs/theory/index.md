def dfs(graph):
visited = set()
result = []

    def explore(node):
        visited.add(node)
        result.append(node)  # process node
        for neighbor in graph[node]:
            if node not in visited:
                explore(neighbor)

    def dfs_driver(graph):
        for node in graph:
            if node not in visited:
                explore(node)

    dfs_driver()
    return result

"""
