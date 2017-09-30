class Fizzbuzz
    def fizzbuzz_1
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
end
# if __FILE__ == $0

# end