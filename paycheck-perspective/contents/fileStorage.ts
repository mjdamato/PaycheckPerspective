//import { get, set } from 'https://unpkg.com/idb-keyval@5.0.2/dist/esm/index.js';
/*

export default class fileStorage {
	
	async choseBasicLocalStorage(){
		
	}

	async chooseLocalStorage(){
		try {
		const pre1 = document.querySelector('pre.file');
		const pre2 = document.querySelector('pre.directory');
		const fileHandleOrUndefined = await get('file');
    	if (fileHandleOrUndefined) {
     		 pre1.textContent = `Retrieved file handle "${fileHandleOrUndefined.name}" from IndexedDB.`;
      	return;
    	}
    	const [fileHandle] = await showOpenFilePicker();
    	await set('file', fileHandle);
    	pre1.textContent = `Stored file handle for "${fileHandle.name}" in IndexedDB.`;
  	} catch (error) {
    	alert(error.message);
  }
  }
	
	
	
	async verifyPermission(fileHandle, readWrite) {
  		const options = {};
  		if (readWrite) {
    		options.mode = 'readwrite';
 		}
  // Check if permission was already granted. If so, return true.
  		if ((await fileHandle.queryPermission(options)) === 'granted') {
    		return true;
 		 }
  // Request permission. If the user grants permission, return true.
  		if ((await fileHandle.requestPermission(options)) === 'granted') {
    		return true;
  		}
  // The user didn't grant permission, so return false.
  return false;
}
	}
	*/