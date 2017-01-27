
** Code developed by Kuldeep Singh 01/27/2017 **
//============================================================================
This is Challenge 2 ---{{"Based on the description of Pascal's Triangle,
create a function that takes number of rows as an argument,
and then prints out Pascal's triangle up to the number of rows specified"}}
//=============================================================================
Solution:-
 Step by Step:-
 1. Created Html layout.
 2. Created a simple function which takes no of rows as arguments.
 3. Then I used document.write("<table>")  and "<tr>" and ""<td>"" to display pascal triangle contents on HTML view.
 4. But the problem in using document.write was that once the Pascal triangle was displayed there
    was no options to go back and display new pascal triangle.
 6. Then instead of using document.write, I created a new node of div1 in HTML and appended it to element.
 7. For each and every row new P element was created. Inside that particular element P, a new text node was appended.
    Finally elements get added to div and are displayed.
//-------------------------------------------------------------------------------------------------------------------