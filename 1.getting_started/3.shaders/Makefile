HOST_COMPILER = g++

INCLUDES  = -I/usr/local/include
LIBRARIESPATH = -L"/usr/local/lib" -L"/System/Library/Frameworks/OpenGL.framework/Libraries"
LIBRARIES = -lGLEW -lglfw3.3
OPENGL_FRAMEWORKS =-framework OpenGL -framework CoreFoundation

GCC_OPTS=-Wall -Wextra -m64

################################################################################
main: main.o
	$(HOST_COMPILER) -o main main.o $(LIBRARIESPATH) $(LIBRARIES) $(GCC_OPTS) $(OPENGL_FRAMEWORKS)

main.o:main.cpp
	$(HOST_COMPILER) -c main.cpp $(INCLUDES) $(GCC_OPTS) -I./

clean:
	rm -f main.o
