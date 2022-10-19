"use strict";

// Priority Queue 
const { Heap } = require('heap-js');

//Returns promise
//Await all log entries added before finishing
const addAsync = async (source,id) => {
  const logEntry = await source.popAsync()
  if (!logEntry) {
    return;
  }
  // Add in index so each (next) entry can be grabbed using ID
  // Each unique ID will correspond to one specific log source with N entries
  const idx = {id: id}
  // Merge objects
  return Object.assign(idx,logEntry)
}
// async to return Promise of log Sources
module.exports = async (logSources, printer) => {
  // Comparator for heap chronological ordering
  let PriorityComparator = (a, b) => a.date - b.date;
  // Initialize new Heap
  let priorityQueue = new Heap(PriorityComparator);
  // Wait for Promise to finish
  let asynclogInfo = await Promise.all(logSources.map(addAsync))
  priorityQueue.init(asynclogInfo)
  // Iterate through the priority queue containing first entry of all log sources
  // Each entry of each source will be popped chronologically
  while (priorityQueue.length) {
    //Pop the specific entry
    let entry = priorityQueue.pop()
    //Get the id of our current entry
    let entryID = entry.id
    printer.print(entry)
    // Grab the next entry from that specific log source
    entry = logSources[entryID].pop()
    // If log source of that specific ID has no more entries
    // Check if log entry is undefined
    if (!entry) {
      // ID is drained and no longer has any entries
      break;
    }
    entry.id = entryID
    // PriorityQueue will push the next entry from the list 
    // Not specifically from current to ensure merge order
    priorityQueue.push(entry)
  }
  printer.done()
};
