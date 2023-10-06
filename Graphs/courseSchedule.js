// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take
// course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

const canFinish = (numCourses, prerequisites) => {
  let list = {};
  let visited = new Set();

  for (let [a, b] of prerequisites) {
    if (!list[a]) {
      list[a] = [b];
    } else {
      list[a].push(b);
    }
  }

  const dfs = (course) => {
    if (visited.has(course)) return false;
    if (list[course] === []) return true;
    visited.add(course);

    if (list[course]) {
      for (let req of list[course]) {
        if (!dfs(req)) return false;
      }
    }

    visited.delete(course);
    list[course] = [];
    return true;
  };

  for (let course in list) {
    if (!dfs(course)) return false;
  }

  return true;
};

console.log(canFinish(2, [[1, 0]]));
