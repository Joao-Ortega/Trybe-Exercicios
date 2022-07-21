import socketserver


class TCPHandler(socketserver.BaseRequestHandler):
    def handle(self):
        self.data = self.request.recv(1024).strip()
        print("{} wrote:".format(self.client_address[0]))
        print(self.data)
        self.request.sendall(self.data.upper())

    def setup(self):
        return 'Olá, client'


if __name__ == "__main__":
    HOST, PORT = "localhost", 8085
    with socketserver.TCPServer((HOST, PORT), TCPHandler) as server:
        print('Olá, client')
        server.serve_forever()
        server.close_request()
