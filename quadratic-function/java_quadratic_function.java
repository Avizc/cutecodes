import java.util.ArrayList;

public class QuadraticFunction{
    private double alice;
    private double boots; 
    private double chester;
    
    public QuadraticFunction(double first,double second,double third){
        this.alice=first;
        this.boots=second;
        this.chester=third;
    }
    /*
     * If there are no parameters it returns 0
     */
    public QuadraticFunction(){
        this.alice=0.0;
        this.boots=0.0;
        this.chester=0.0;
    }
    /*
     * For the Tester class
     */
    public String toString(){
        if(this.boots<0){
            return this.alice+"x^2"+" "+this.boots+"x + "+this.chester;
        }
        else if(this.chester<0){
            return this.alice+"x^2 + " +this.boots+"x"+" "+this.chester;
        }
        else if(this.boots<0&&this.chester<0){
            return this.alice+"x^2"+" "+this.boots+"x"+" "+this.chester;
        }
        else{
            return this.alice+"x^2 + "+this.boots+"x + "+this.chester;
        }
    }
    public boolean opensUp(){
        return true;
    }
    public double vertex(){
        return -boots/(2*alice);
    }
    public double getY(double x){
        return (alice*x*x)+(boots*x)+chester;
    }
    public double discriminant(){
        return (boots*boots)-(4*alice*chester);
    }
    /*
     * returns an array of doubles 0, 1, 2 roots of type double
     */
    public ArrayList<Double> getRoots(){
        ArrayList<Double> rootList = new ArrayList();
        double root1,root2;
        if(discriminant()<0){
            // do nothing
        }
        else if(discriminant()==0){
            root1=vertex();
            rootList.add(root1);
        }
        else if(discriminant()>0){
            root1=(-boots+Math.sqrt(discriminant()))/(2*alice);
            root2=(-boots-Math.sqrt(discriminant()))/(2*alice);
            rootList.add(root1);
            rootList.add(root2);
        }
        return rootList;
    }
}