#version 330 core
out vec4 color;

void main()
{
    color = vec4(0.0f, 1.0f, 0.0f, 1.0f);
    //float depth = LinearizeDepth(gl_FragCoord.z) / far;  // divide by far for demostration
    //color = vec4(vec3(depth), 1.0f);
}
