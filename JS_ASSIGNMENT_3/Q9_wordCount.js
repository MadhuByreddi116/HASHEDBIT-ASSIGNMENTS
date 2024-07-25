function wordCount(str)
{
    let arr = str.trim().split(/\s+/);
    return arr.length;
}


console.log(wordCount(" Write a function to count the number of words in a paragraph. "));