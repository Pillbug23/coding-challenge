"use strict";

// Not sure I understand the question, N logSources each with n log entries
// The log entries are in sorted order so we essentially have k sorted LogSources
// Each sorted in chronological order from most recent to least
// [[8-30,8-29,8-26],[8-31,8-29,8-25],...]
// I believe the algorithm here is mergeSort, here is my pseudo solution
const mergeKSources = (logSources, start, end) => {
  //Base Case: We only have 1 logSource
  if (start == end) {
    return logSources[start]
  }
  let midpoint = start - (end - start) / 2
  // [[8-30 -> 8-29],[8-27 -> 8-25...],[8-24 -> 8-22...],[8-21 -> 8-19...]]
  // [[8-30 -> 8-29],[8-27 -> 8-25...]]
  let leftHalf = mergeKSources(logSources, start, mid)
  //[[8-24 -> 8-22...],[8-21 -> 8-19...]]
  let rightHalf = mergeKSources(logSources, mid+1, mid)
  // Merge helper function for merging two sorted list dates
  // Essentially we want to combine into 1 sorted merged list
  return merge(leftHalf,rightHalf)
}

const merge = (left,right) => {
  while (left!= null || right !=  null) {
    //Check for empty left/right logSource
    if (!left) {
      // do something with the rest of right entries
    } else if (!right) {
      // do something with the rest of left entries
    } else if (left.date > right.date) {
      //do something
    } else {
      //do something
    }
  }
}

// async to return Promise of log Sources
module.exports = async (logSources, printer) => {
  // wait until result is returned
  let asynclogInfo = await Promise.all(logSources.map((source,index) => {
    const logEntry = source.popAsync();
    return logEntry;
  }))
  let sortedLog = asynclogInfo.sort((a,b) => b.date - a.date);
  while (sortedLog.length > 0){
    let entry = sortedLog.pop();
    // if entry has valid content
    if (entry) {
      printer.print(entry);
    }
  }
  printer.done();
};
