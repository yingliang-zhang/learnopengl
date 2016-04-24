HOST_COMPILER := g++

# Common includes and paths for CUDA
INCLUDES  := -I/usr/local/include -I"/System/Library/Frameworks/GLUT.framework/Headers"
LIBRARIESPATH := -L"/usr/local/lib" -L"/System/Library/Frameworks/OpenGL.framework/Libraries"
LIBRARIES := -lGL -lGLU -lGLEW -lglfw3

GCC_OPTS=-Wall -Wextra -m64

################################################################################
main: main.o
	$(HOST_COMPILER) -o main main.o $(LIBRARIESPATH) $(LIBRARIES) $(GCC_OPTS)

main.o:main.cpp
	$(HOST_COMPILER) -c main.cpp $(INCLUDES) $(GCC_OPTS)

clean:
	rm -f main.o
