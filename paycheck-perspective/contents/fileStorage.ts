//import { get, set } from 'https://unpkg.com/idb-keyval@5.0.2/dist/esm/index.js';
export default class savedStore {
	//jobLinks: any[] = [];
	handleFile:any;

	async checkForStorage(){
		//if storage contains things, then return previous value
		//else return new value
		if (this.handleFile != null){
			const [fileHandle] = this.handleFile;
			return [fileHandle];
		}
		else{
			const [fileHandle] = await showOpenFilePicker();
			this.handleFile = [fileHandle];
			return [fileHandle];
		}
	}

//for future iterations
// the following function would be in charge of checking permissions
/*	
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