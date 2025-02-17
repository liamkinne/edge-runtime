import * as net from "ext:deno_net/01_net.js";
import * as tls from "ext:deno_net/02_tls.js";
import * as permissions from "ext:sb_core_main_js/js/permissions.js";
import {
    errors
} from "ext:sb_core_main_js/js/errors.js";
import { serveHttp } from "ext:sb_core_main_js/js/http.js";
import * as fs from "ext:deno_fs/30_fs.js";

const fsVars = {
    writeFileSync: fs.writeFileSync,
    writeFile: fs.writeFile,
    writeTextFileSync: fs.writeTextFileSync,
    writeTextFile: fs.writeTextFile,
    readTextFile: fs.readTextFile,
    readTextFileSync: fs.readTextFileSync,
    readFile: fs.readFile,
    readFileSync: fs.readFileSync,
    chmodSync: fs.chmodSync,
    chmod: fs.chmod,
    chown: fs.chown,
    chownSync: fs.chownSync,
    copyFileSync: fs.copyFileSync,
    cwd: fs.cwd,
    makeTempDirSync: fs.makeTempDirSync,
    makeTempDir: fs.makeTempDir,
    makeTempFileSync: fs.makeTempFileSync,
    makeTempFile: fs.makeTempFile,
    mkdirSync: fs.mkdirSync,
    mkdir: fs.mkdir,
    chdir: fs.chdir,
    copyFile: fs.copyFile,
    readDirSync: fs.readDirSync,
    readDir: fs.readDir,
    readLinkSync: fs.readLinkSync,
    readLink: fs.readLink,
    realPathSync: fs.realPathSync,
    realPath: fs.realPath,
    removeSync: fs.removeSync,
    remove: fs.remove,
    renameSync: fs.renameSync,
    rename: fs.rename,
    statSync: fs.statSync,
    lstatSync: fs.lstatSync,
    stat: fs.stat,
    lstat: fs.lstat,
    truncateSync: fs.truncateSync,
    truncate: fs.truncate,
    ftruncateSync: fs.ftruncateSync,
    ftruncate: fs.ftruncate,
    futime: fs.futime,
    futimeSync: fs.futimeSync,
    File: fs.File,
    FsFile: fs.FsFile,
    open: fs.open,
    openSync: fs.openSync,
    create: fs.create,
    createSync: fs.createSync,
    seek: fs.seek,
    seekSync: fs.seekSync,
    fstatSync: fs.fstatSync,
    fstat: fs.fstat,
    fsyncSync: fs.fsyncSync,
    fsync: fs.fsync,
    fdatasyncSync: fs.fdatasyncSync,
    fdatasync: fs.fdatasync,
    symlink: fs.symlink,
    symlinkSync: fs.symlinkSync,
    link: fs.link,
    linkSync: fs.linkSync,
    utime: fs.utime,
    utimeSync: fs.utimeSync,
}

const denoOverrides = {
    listen: net.listen,
    connect: net.connect,
    connectTls: tls.connectTls,
    startTls: tls.startTls,
    resolveDns: net.resolveDns,
    serveHttp: serveHttp,
    permissions: permissions.permissions,
    Permissions: permissions.Permissions,
    PermissionStatus: permissions.PermissionStatus,
    errors: errors,
    ...fsVars
}

export { denoOverrides, fsVars };