{
"targets": [
{
"target_name": "cLibrary",
"cflags!": ["-fno-exceptions"],
"cflags_cc!": ["-fno-exceptions"],
"sources": ["./sourceCpp/cLibrary.cc"],
"include_dirs": [
"<!@(node -p \"require('node-addon-api').include\")"
],
'defines': ['NAPI_DISABLE_CPP_EXCEPTIONS'],
}
]
}