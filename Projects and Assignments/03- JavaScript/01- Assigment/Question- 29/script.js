// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

function getFileExtension(filename) {
    const index = filename.lastIndexOf('.');
    if (index === -1) return 'The file has no extension';
    return filename.slice(index + 1);
  }
  
  const filename = prompt('Enter a filename:');
  console.log(`The extension of the file is: .${getFileExtension(filename)}`);
  