# This works but couldn't get classes working
# To do: figure out classes and what not
def fizzbuzz
    for i in 1...19 do
        if(i%3==0&&i%5==0)
            puts "fizzbuzz"
        elsif(i%buzz==0)
            puts "buzz"
        elsif(i%fizz==0)
            puts "fizz"
        else
            puts "#{i}"
        end
    end
end
