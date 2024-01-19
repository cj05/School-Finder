#include <napi.h>
#include "csv.hpp"

using namespace csv;

Napi::Value SumOfN(const Napi::CallbackInfo &info)
{
    double LIMIT = info[0].As<Napi::Number>();
    double sum = 0;
    for (double i = 0; i < LIMIT; i++)
        sum += i;
    Napi::Number res = Napi::Number::New(info.Env(), sum);
    return res;
}

Napi::Value SimpleSuggestion(const Napi::CallbackInfo &info)
{
    std::string ModelFilePath = info[0].ToString().Utf8Value();
    std::string ModelBigData = info[1].ToString().Utf8Value();
    Napi::Array Sample = info[2].As<Napi::Array>();//User data
    //format, open file or whatever
    CSVReader reader("very_big_file.csv");
    for (CSVRow& row: reader) { // Input iterator
    for (CSVField& field: row) {
        // By default, get<>() produces a std::string.
        // A more efficient get<string_view>() is also available, where the resulting
        // string_view is valid as long as the parent CSVRow is alive
        std::cout << field.get<>() << ...
    }
}

    

    //Loop over data



    


    Napi::Number res = Napi::Number::New(info.Env(), 0);
    return res;
}

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set(Napi::String::New(env, "sumOfN"),
                Napi::Function::New(env, SumOfN));
    return exports;
}

NODE_API_MODULE(mandelBrot, Init)