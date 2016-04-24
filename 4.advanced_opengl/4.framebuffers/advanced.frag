#version 330 core
in vec2 TexCoords;

out vec4 color;

uniform sampler2D texture1;

void main()
{
    color = texture(texture1, TexCoords);
    //float depth = LinearizeDepth(gl_FragCoord.z) / far;  // divide by far for demostration
    //color = vec4(vec3(depth), 1.0f);
}
