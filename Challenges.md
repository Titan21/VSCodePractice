## Challenges ##

Extra Challenge: Install the following VSCode Extension to disable your mouse: [yaamaa.disable-mouse](https://marketplace.visualstudio.com/items?itemName=yaamaa.disable-mouse)

Shortcuts: [Here](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

ErrorLens Extension: [Link](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

<script>
    function hideHints(){
        var tableCells = document.getElementsByTagName('td');

        for (var i = 0; i < tableCells.length; i++) {
            if (tableCells[i].cellIndex % 2 == 1) {
                tableCells[i].style.visibility = 'hidden'
            }
        }
    }
    function revealHint(){
        var tableCells = document.getElementsByTagName('td');
        for (var i = 0; i < tableCells.length; i++) {
            if(tableCells[i].style.visibility == 'hidden'){
                tableCells[i].style.visibility = 'visible';
                break;
            }
        }
    }
</script>
<button onclick=hideHints();>Hide</button> 
<button onclick=revealHint();>Reveal</button> 

| <div style="width: 400px">Challenge</div> | Hint |
| ----------| -------- |
| Navigate to the Rectangle class definition. | `Ctrl+Shift+O` |
| Move the `getArea` method of the `Circle` class after the `getPerimeter` method. | Use `Ctrl+Shift+O` to find `getArea`, press `Ctrl+L` multiple times to select the method, then move by pressing `Alt+↓`|
| Insert a new line above the `calculateSum` function declaration. | Place your cursor on the line with function `calculateSum`, then press `Ctrl+Shift+Enter` |
| Duplicate the `findMedian` function | First, select the function by placing your cursor on the function and pressing `Ctrl+L` multiple times. Then, duplicate it using `Shift+Alt+↓` |
| Hide the left VSCode sidebar so you've got more space | `Ctrl+B` |
| Collapse the entire Circle class | Place your cursor anywhere within the circle class, then press `Ctrl+Shift+[` as required |
| Open, then hide the VSCode Terminal at the bottom | ``Ctrl+` `` (above `Tab`)|
| Comment out the 2nd findMedian function | Find creative ways to highlight the whole function block, then press `Ctrl+/` |
| Jump back and forth between the start and end of the `findMedian` function | Place your cursor at the opening `{`, then press `Ctrl+Shift+\` |
| Rename the parameter `numbers` of the `findMedian` function to the german `nummern` | Place your curson on any `numbers` within the function, then press `F2` to `Rename Symbol` |
| Create a `circle2` with Perimeter of `7` | Use `Ctrl+Shift+O` to find `circle`, then use `Shift+Alt+↓`, then rename and change Parameter |
| Select all the lines with the console.log statements and indent them one level. | Click and drag to select the lines. Then, press `Ctrl+]` to indent |
| <button onclick=revealHint();>Reveal</button> | |
| Fold all regions (functions, classes) in the file to get a better overview | Press `Ctrl+K Ctrl+0` to collapse all regions |
| Change the Names of all Items from `1,2,3` to `100,200,300` | Place the cursor after `Item 1`, then use `Ctrl+Alt+↓` to block select and type `00` |
| Format the entire document | Press `Shift+Alt+F` |
| Switch to Zen mode | `Ctrl+K Z` . To exit press `Esc` twice |
| Add `circle2` to `shapeArray` without typing `circle2` or copying & pasting | Find `shapeArray` using `Ctrl+Shift+O` then move the cursor to the array using `Ctrl+→`, then use `Ctrl+Space` to select `circle2` from the suggestions |
| Surround the the `items.forEach` loop with a `try-catch` block | First, select the code inside the loop using click and drag. Then, press `Ctrl+Shift+P` and type "Surround with" in the Command Palette. Select "Surround with try catch" from the suggestions |
| Focused on the line `The max value in the ...` take a peek at how `findMax` is implemented | Place the cursor on `findMax` and press `Alt+F12` |
| Unfold all regions again | Use `Ctrl+Shift+P` to bring up the Command Palette, then enter `Unfold` and use the arrow keys & enter to select `Unfold all` |
| Focused on the line `The median of ...` using your mouse, jump to the implementation of `findMedian` | `Ctrl+Click` on `findMedian` |
| Replace all instances of the `console.log` statement with `console.info` | Press `Ctrl+H`, enter `console.log` in the "Find" field and `console.info` in the "Replace" field. Then, click "Replace All" |
| Looking at `class Circle extends Shape` find each reference of `Circle` | With your cursor on `Circle` press `Shift+F12` to show references |
| Focused on the line `The sum of the numbers` select everything between the backticks | Anywhere within the backticks press `Shift+Alt+→` twice (Even works across lines!)|
| Select surround the words `sum of the numbers` with `()` | With the cursor on the beginning of `sum` press `Ctrl+Shift+→` multiple times to select, then `(` to surround |


<button onclick=revealHint();>Reveal</button> 

