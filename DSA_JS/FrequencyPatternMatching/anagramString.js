function anagram(str1, str2)
{
    if(str1.length !== str2.length)
    {
        return false;
    }

    let object = {};

    for(let i = 0; i < str1.length; i++)
    {
        let letter = str1[i];
        object[letter] ? object[letter] += 1 : object[letter] = 1;
    }
    console.log(object);
    for(let j = 0; j < str2.length; j++)
    {
        let letter = str2[j];

        if(!object[letter])
        {
            return false;
        }
        else
        {
            object[letter] -= 1;
        }
    }
    console.log(object);
    return true;
}

console.log(anagram('anagram', 'nagaram'));

/* Output:

{a: 3, n: 1, g: 1, r: 1, m: 1}
{a: 0, n: 0, g: 0, r: 0, m: 0}
true

*/
