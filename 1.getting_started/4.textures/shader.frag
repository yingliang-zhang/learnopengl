#version 410 core

in vec3 ourColor;
in vec2 TexCoord;
in vec2 TexCoord2;

out vec4 color;

uniform sampler2D ourTexture1;
uniform sampler2D ourTexture2;

uniform float weight;

void main()
{
    color = mix(texture(ourTexture1, TexCoord), texture(ourTexture2, TexCoord2), weight);
    //color = vec4(ourColor, 1);
}
