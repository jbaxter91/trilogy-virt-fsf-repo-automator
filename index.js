//Ask user where the location of the complete (Teacher) folder is
//Ask user where the location of the partial (student) folder is
//Creates directory called "output"
//Inside output directory, creates directory "solved"
//Clones the files from the complete activities directory for each week into solved for each week
//Clones solved directory and renames it to unsolved
//Loops over all folders inside unsolved and remove directories with name of "solved"
//Asks if they want bash aliases added, if no end here
//Then looks to see if "~/.bash_profiles" exists, if not creates it
//Appends an allias to "~/.bash_profiles" for each weeks solved and unsolved
// Example of this would be "alias p1s="cp -T ./output/solved/01/01-activities {partial directory}/01-someName/01-activities && cd {partial directory} && git add . && git commit -m 'week1 solved' && git push" # Copies week 1 solved into partial directory and pushes it to origin
