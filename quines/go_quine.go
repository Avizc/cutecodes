package main
import "fmt"
func main(){
	bun:="package main\nimport \"fmt\"\nfunc main(){\nbun:=\"\"\nfmt.Println(bun)\nfmt.Println(\"I'm unsure if this is a legitimate quine or not whoops.\")\n}"
	fmt.Println(bun)
	fmt.Println("I'm unsure if this is a legitimate quine or not whoops.")
}